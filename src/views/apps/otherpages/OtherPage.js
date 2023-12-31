import React from "react";
import {
  Card,
  CardBody,
  Input,
  Row,
  Col,
  Button,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Label,
} from "reactstrap";
import ReactHtmlParser from "react-html-parser";
import axiosConfig from "../../../axiosConfig";
import "react-toastify/dist/ReactToastify.css";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
import "../../../assets/scss/plugins/extensions/editor.scss";
import draftToHtml from "draftjs-to-html";
import { ContextLayout } from "../../../utility/context/Layout";
import { AgGridReact } from "ag-grid-react";
import { Eye, Edit, Trash2, ChevronDown, CloudLightning } from "react-feather";
//import classnames from "classnames";
import "../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../assets/scss/pages/users.scss";
import { Route } from "react-router-dom";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
import swal from "sweetalert";
class OtherPage extends React.Component {
  state = {
    rowData: [],
    paginationPageSize: 20,
    currenPageSize: "",
    getPageSize: "",
    select_sslmedia: "",
    url: "",
    desc: "",
    other: "true",
    status: "true",
    pageName: "",
    isChecked: false,
    toggle: true,
    defaultColDef: {
      sortable: true,
      editable: true,
      resizable: true,
      suppressMenu: true,
      inputList: "",
    },
    columnDefs: [
      {
        headerName: "S.No",
        valueGetter: "node.rowIndex + 1",
        field: "node.rowIndex + 1",
        width: 100,
        filter: true,
      },

      {
        headerName: "Page Name",
        field: "pageName",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.pageName}</span>
            </div>
          );
        },
      },

      {
        headerName: "Desc",
        field: "pagedesc",
        filter: true,
        width: 300,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{ReactHtmlParser(params.data.desc)}</span>
            </div>
          );
        },
      },

      //   {
      //     headerName: "Status",
      //     field: "status",
      //     filter: true,
      //     width: 100,
      //     cellRendererFramework: (params) => {
      //       return (
      //         <div>
      //           <span>{params?.data.status}</span>
      //         </div>
      //       );
      //     },
      //   },

      {
        headerName: "Action",
        field: "sortorder",
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div className="">
              {/* <Route
                render={({ history }) => (
                  <Edit
                    style={{ cursor: "pointer" }}
                    className="mr-50"
                    size="25px"
                    color="blue"
                    onClick={() => history.push("/app/userride/editUserRide")}
                  />
                )}
              /> */}
              <Trash2
                className="mr-50"
                style={{ cursor: "pointer" }}
                size="25px"
                color="red"
                onClick={() => {
                  this.runthisfunction(params.data._id);
                }}
              />
            </div>
          );
        },
      },
    ],
  };
  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
      desc: draftToHtml(convertToRaw(editorState.getCurrentContent())),
    });
    console.log("dasd", this.state.desc);
  };
  handleSelect = (e) => {
    this.setState({ select_sslmedia: e.target.value });
  };
  componentDidUpdate() {
    this.getAllPage();
  }
  handleAdd = async (e) => {
    e.preventDefault();
    const payload = {
      pageName: this.state.pageName,
      desc: this.state.desc,
      //   other: "true",
      //   status: "true",
    };
    axiosConfig
      .post(`/admin/add_otherPages`, payload)
      .then((response) => {
        console.log(response.data.data);
        // this.getAllPage();
        swal("Success!", "Submitted SuccessFull!", "success");
        // this.props.history.push("/app/event/bookEvent/bookEventList");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  getAllPage = () => {
    axiosConfig.get("/admin/getPages").then((response) => {
      let rowData = response.data.data;
      console.log(rowData);
      this.setState({ rowData });
    });
  };

  //   componentDidMount(prevProps, prevState) {
  //     if (prevState.pageName !== this.state.pageName) {
  //       this.getAllPage();
  //     }
  //   }

  async runthisfunction(id) {
    await axiosConfig.get(`/admin/dltPages/${id}`).then(
      (response) => {
        this.getAllPage();
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.setState({
      currenPageSize: this.gridApi.paginationGetCurrentPage() + 1,
      getPageSize: this.gridApi.paginationGetPageSize(),
      totalPages: this.gridApi.paginationGetTotalPages(),
    });
  };
  updateSearchQuery = (val) => {
    this.gridApi.setQuickFilter(val);
  };
  filterSize = (val) => {
    if (this.gridApi) {
      this.gridApi.paginationSetPageSize(Number(val));
      this.setState({
        currenPageSize: val,
        getPageSize: val,
      });
    }
  };
  render() {
    const { rowData, columnDefs, defaultColDef } = this.state;
    return (
      <div>
        <Breadcrumbs
          breadCrumbTitle="Other Page"
          breadCrumbParent="Home"
          breadCrumbActive="Other Page "
        />

        <Row className="app-user-list">
          <Col sm="12"></Col>
          <Col sm="12">
            <Card>
              <Row className="m-2">
                <Col lg="12" md="12" sm="12">
                  <h3>Add Page</h3>
                </Col>
                <Col lg="12" md="12" sm="12">
                  <Input
                    required
                    type="text"
                    name="pageName"
                    placeholder="Enter Page Name"
                    value={this.state.pageName}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="12" md="12" sm="12" className="mb-2">
                  <Label className="my-1">Page Description</Label>
                  <br />
                  <Editor
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    onEditorStateChange={this.onEditorStateChange}
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
                </Col>
                <Col>
                  <h3>All Other Page List</h3>
                </Col>
                <Col>
                  <Route
                    render={() => (
                      <Button
                        className=" btn btn-success float-right"
                        onClick={this.handleAdd}
                      >
                        Add Plan
                      </Button>
                    )}
                  />
                </Col>
              </Row>

              <CardBody>
                {this.state.rowData === null ? null : (
                  <div className="ag-theme-material w-100 my-2 ag-grid-table">
                    <div className="d-flex flex-wrap justify-content-between align-items-center">
                      <div className="mb-1">
                        <UncontrolledDropdown className="p-1 ag-dropdown">
                          <DropdownToggle tag="div">
                            {this.gridApi
                              ? this.state.currenPageSize
                              : "" * this.state.getPageSize -
                                (this.state.getPageSize - 1)}{" "}
                            -{" "}
                            {this.state.rowData.length -
                              this.state.currenPageSize *
                                this.state.getPageSize >
                            0
                              ? this.state.currenPageSize *
                                this.state.getPageSize
                              : this.state.rowData.length}{" "}
                            of {this.state.rowData.length}
                            <ChevronDown className="ml-50" size={15} />
                          </DropdownToggle>
                          <DropdownMenu right>
                            <DropdownItem
                              tag="div"
                              onClick={() => this.filterSize(20)}
                            >
                              20
                            </DropdownItem>
                            <DropdownItem
                              tag="div"
                              onClick={() => this.filterSize(50)}
                            >
                              50
                            </DropdownItem>
                            <DropdownItem
                              tag="div"
                              onClick={() => this.filterSize(100)}
                            >
                              100
                            </DropdownItem>
                            <DropdownItem
                              tag="div"
                              onClick={() => this.filterSize(134)}
                            >
                              134
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </div>
                      <div className="d-flex flex-wrap justify-content-between mb-1">
                        <div className="table-input mr-1">
                          <Input
                            placeholder="search..."
                            onChange={(e) =>
                              this.updateSearchQuery(e.target.value)
                            }
                            value={this.state.value}
                          />
                        </div>
                        <div className="export-btn">
                          <Button.Ripple
                            color="primary"
                            onClick={() => this.gridApi.exportDataAsCsv()}
                          >
                            Export as CSV
                          </Button.Ripple>
                        </div>
                      </div>
                    </div>
                    <ContextLayout.Consumer>
                      {(context) => (
                        <AgGridReact
                          gridOptions={{}}
                          rowSelection="multiple"
                          defaultColDef={defaultColDef}
                          columnDefs={columnDefs}
                          rowData={rowData}
                          onGridReady={this.onGridReady}
                          colResizeDefault={"shift"}
                          animateRows={true}
                          floatingFilter={false}
                          pagination={true}
                          paginationPageSize={this.state.paginationPageSize}
                          pivotPanelShow="always"
                          enableRtl={context.state.direction === "rtl"}
                        />
                      )}
                    </ContextLayout.Consumer>
                  </div>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
export default OtherPage;
