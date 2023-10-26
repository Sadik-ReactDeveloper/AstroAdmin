import React from "react";
import { Card, CardBody, Col, Row, Form, Button, Label } from "reactstrap";
import "react-toastify/dist/ReactToastify.css";
import {
  ContentState,
  EditorState,
  convertFromHTML,
  convertToRaw,
} from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../../../assets/scss/plugins/extensions/editor.scss";
import axiosConfig from "../../../../axiosConfig";
import { history } from "../../../../history";

class AddTermsCondition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      desc: "",
    };
  }

  uploadImageCallBack = (file) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "https://api.imgur.com/3/image");
      xhr.setRequestHeader("Authorization", "Client-ID 7e1c3e366d22aa3");
      const data = new FormData();
      data.append("image", file);
      xhr.send(data);
      xhr.addEventListener("load", () => {
        const response = JSON.parse(xhr.responseText);
        resolve(response);
      });
      xhr.addEventListener("error", () => {
        const error = JSON.parse(xhr.responseText);
        reject(error);
      });
    });
  };

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
      desc: draftToHtml(convertToRaw(editorState.getCurrentContent())),
    });
  };
  componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/admin/getone_term_cond/${id}`)
      .then((response) => {
        const description = response.data.data.desc;
        const contentState = ContentState.createFromBlockArray(
          convertFromHTML(description)
        );
        const editorState = EditorState.createWithContent(contentState);
        this.setState({
          desc: description,
          editorState: editorState,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    let { id } = this.props.match.params;
    axiosConfig
      .post(`/admin/edit_term_cond/${id}`, this.state)
      .then((response) => {
        console.log(response);
        // swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push(
          `/app/pagesetup/termscondition/termConditionList`
        );
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  render() {
    return (
      <Card>
        <Row className="m-2">
          <Col>
            <h1 col-sm-6 className="float-left">
              Edit Term And Condition
            </h1>
          </Col>
          <Col>
            <Button
              className=" btn btn-danger float-right"
              onClick={() =>
                history.push("/app/pagesetup/termscondition/termConditionList")
              }
            >
              Back
            </Button>
          </Col>
        </Row>
        <CardBody>
          <Form onSubmit={this.submitHandler}>
            {/* <Col lg="12" md="12" sm="12" className="mb-2">
              <Label> Description</Label>
              <br />

              <Editor
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                onEditorStateChange={this.onEditorStateChange}
                toolbarClassName="demo-toolbar-absolute"
                editorState={this.state.editorState}
                toolbar={{
                  inline: { inDropdown: true },
                  list: { inDropdown: true },
                  textAlign: { inDropdown: true },
                  link: { inDropdown: true },
                  history: { inDropdown: true },
                  image: {
                    uploadCallback: this.uploadImageCallBack,
                    previewImage: true,
                    alt: { present: true, mandatory: true },
                  },
                }}
              />
            </Col> */}
            <Col lg="12" md="4" sm="12" className="mb-2">
              <Label> Description</Label>
              <Editor
                // toolbarClassName="demo-toolbar-absolute"
                // wrapperClassName="demo-wrapper"
                // editorClassName="demo-editor"
                // editorState={this.state.editorState}
                // onEditorStateChange={this.onEditorStateChange}
                toolbarClassName="demo-toolbar-absolute"
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                editorState={this.state.editorState}
                onEditorStateChange={this.onEditorStateChange}
                toolbar={{
                  options: ["inline", "blockType", "fontSize", "fontFamily"],
                  inline: {
                    options: [
                      "bold",
                      "italic",
                      "underline",
                      "strikethrough",
                      "monospace",
                    ],
                    bold: { className: "bordered-option-classname" },
                    italic: { className: "bordered-option-classname" },
                    underline: { className: "bordered-option-classname" },
                    strikethrough: {
                      className: "bordered-option-classname",
                    },
                    code: { className: "bordered-option-classname" },
                  },
                  blockType: {
                    className: "bordered-option-classname",
                  },
                  fontSize: {
                    className: "bordered-option-classname",
                  },
                  fontFamily: {
                    className: "bordered-option-classname",
                  },
                }}
              />
            </Col>
            <Button color="primary"> Submit</Button>
          </Form>
        </CardBody>
      </Card>
    );
  }
}
export default AddTermsCondition;
