
const Header = ({visible}) => {
  
  return visible ? (
    <div>
    </div>
  ) : <></>;
}
Header.defaultProps = {
  visible: false,
}
export default Header