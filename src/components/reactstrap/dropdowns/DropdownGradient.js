import React from "react"
import {
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink
} from "reactstrap"
import classnames from "classnames"
import { Eye, Code, ChevronDown } from "react-feather"
import { dropdownGradient } from "./DropdownsSourceCode"

class DropdownGradient extends React.Component {
  state = {
    activeTab: "1"
  }

  toggleTab = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab })
    }
  }

  render() {
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            <CardTitle>Gradient</CardTitle>
            <div className="views">
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.activeTab === "1"
                    })}
                    onClick={() => {
                      this.toggleTab("1")
                    }}
                  >
                    <Eye size={15} />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.activeTab === "2"
                    })}
                    onClick={() => {
                      this.toggleTab("2")
                    }}
                  >
                    <Code size={15} />
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </CardHeader>
          <CardBody>
            <p>
              Use class <code>bg-gradient-*</code> to create a gradient
              drodpown.
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <div className="dropdown mr-1 mb-1 d-inline-block">
                  <UncontrolledButtonDropdown>
                    <DropdownToggle
                      className="bg-gradient-primary"
                      color="none"
                      caret
                    >
                      Primary
                      <ChevronDown size={15} />
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem tag="a">Option 1</DropdownItem>
                      <DropdownItem tag="a">Option 2</DropdownItem>
                      <DropdownItem tag="a">Option 3</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledButtonDropdown>
                </div>
                <div className="dropdown mr-1 mb-1 d-inline-block">
                  <UncontrolledButtonDropdown>
                    <DropdownToggle
                      className="bg-gradient-success"
                      color="none"
                      caret
                    >
                      Success
                      <ChevronDown size={15} />
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem tag="a">Option 1</DropdownItem>
                      <DropdownItem tag="a">Option 2</DropdownItem>
                      <DropdownItem tag="a">Option 3</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledButtonDropdown>
                </div>
                <div className="dropdown mr-1 mb-1 d-inline-block">
                  <UncontrolledButtonDropdown>
                    <DropdownToggle
                      className="bg-gradient-info"
                      color="none"
                      caret
                    >
                      Info
                      <ChevronDown size={15} />
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem tag="a">Option 1</DropdownItem>
                      <DropdownItem tag="a">Option 2</DropdownItem>
                      <DropdownItem tag="a">Option 3</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledButtonDropdown>
                </div>
                <div className="dropdown mr-1 mb-1 d-inline-block">
                  <UncontrolledButtonDropdown>
                    <DropdownToggle
                      className="bg-gradient-danger"
                      color="none"
                      caret
                    >
                      Danger
                      <ChevronDown size={15} />
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem tag="a">Option 1</DropdownItem>
                      <DropdownItem tag="a">Option 2</DropdownItem>
                      <DropdownItem tag="a">Option 3</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledButtonDropdown>
                </div>
                <div className="dropdown mr-1 mb-1 d-inline-block">
                  <UncontrolledButtonDropdown>
                    <DropdownToggle
                      className="bg-gradient-warning"
                      color="none"
                      caret
                    >
                      Warning
                      <ChevronDown size={15} />
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem tag="a">Option 1</DropdownItem>
                      <DropdownItem tag="a">Option 2</DropdownItem>
                      <DropdownItem tag="a">Option 3</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledButtonDropdown>
                </div>
                <div className="dropdown mr-1 mb-1 d-inline-block">
                  <UncontrolledButtonDropdown>
                    <DropdownToggle
                      className="bg-gradient-dark"
                      color="none"
                      caret
                    >
                      Dark
                      <ChevronDown size={15} />
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem tag="a">Option 1</DropdownItem>
                      <DropdownItem tag="a">Option 2</DropdownItem>
                      <DropdownItem tag="a">Option 3</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledButtonDropdown>
                </div>
              </TabPane>
               <TabPane className="component-code" tabId="2">{dropdownGradient}</TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default DropdownGradient
