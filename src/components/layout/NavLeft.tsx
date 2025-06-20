import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, connect } from "react-redux";
import PerfectScrollBar from "react-perfect-scrollbar";
import Tooltiped from "@/components/layout/Tooltiped";
import { NavItems, navItems } from "@utils/nav";
import { AppState } from "@store/reducers";
import _ from "lodash";
import IgLogo from "@assets/img/logo/maybank_full.png";
// import { ReactComponent as IcHome } from '@assets/img/nav/home.svg';

function usePrevious(value: any) {
  const ref = React.useRef();

  React.useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

interface Props {
  typeNav?: string | undefined;
  token?: any;
}

function NavLeft(props: Props): JSX.Element {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = location;

  const [linkActive, setLinkActive] = React.useState<string>("");

  const { typeNav, token } = props;
  const prePathname: string | undefined | null = usePrevious(pathname);

  React.useEffect(() => {
    if (pathname && pathname !== prePathname) {
      setTimeout(() => {
        setLinkActive(pathname);
      }, 200);
    }
  }, [pathname]);

  function handleClickLink(params: string) {
    setLinkActive(params);
  }

  function getImageByKey(key: string) {
    switch (key) {
      // case "home":
      //   return <IcHome className="h-4 w-4" />;
      default:
        return <span />;
    }
  }

  const _handleLogout = () => {
    sessionStorage.removeItem("token");

    navigate("/login");
  };

  function renderMiniHasAct(record: NavItems) {
    return (
      <Link
        to={record.url}
        className={
          "w-full justify-center " +
          (linkActive.startsWith(record.url + "/") || linkActive === record.url
            ? "active"
            : "")
        }
      >
        <Tooltiped placement="right" title={record.name}>
          {getImageByKey(record.icon)}
        </Tooltiped>
      </Link>
    );
  }


  return (
    <div className={"nav-left h-full border-r nav_" + typeNav}>
      <div className="flex items-center justify-center">
        <img src={IgLogo} className="h-20" />
      </div>
      {/* <PerfectScrollBar>  */}
      <ul>
        {navItems &&
          navItems.map(
            (item, index) =>
            (<li
              key={index}
              className={
                "flex flex-col " +
                (linkActive.includes(item.url) ? "active" : "")
              }
            >
              {item.children && (
                <>
                  <a
                    className={"w-full has-content "}
                    onClick={(e) => {
                      handleClickLink(item.url);
                    }}
                  >
                    {getImageByKey(item.icon)}
                    {item.name}
                  </a>

                  <ul className="sub-menu">
                    {item.children.map(
                      (sub, idxSub) =>
                      (<li
                        key={idxSub}
                        className={
                          linkActive === sub.url ? "active" : ""
                        }
                      >
                        <Link
                          to={sub.url}
                          className={"w-full "}
                        >
                          {sub.name}
                        </Link>
                      </li>)
                    )}
                  </ul>
                </>
              )}

              {!item.children && (
                <Link
                  to={item.url}
                  className={"w-full has-content "}
                >
                  {getImageByKey(item.icon)}
                  {item.name}
                </Link>
              )}
            </li>)
          )}
      </ul>
      {/* </PerfectScrollBar> */}
    </div>
  );
}

const mapStateToProps = (state: AppState) => {
  return {
  };
};

export default connect(mapStateToProps)(React.memo(NavLeft));
