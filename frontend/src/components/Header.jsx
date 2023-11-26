import IACSDLogo from "../images/IACSD_Logo.png";
import CDACLogo from "../images/cdacActs.png";
function Header(){
    let st={
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }

    return(
        <>
        <div style={st}>
        <img src={IACSDLogo} />
        <div>
        <h3 style={{display:'flex',justifyContent:'center',color:'#227396',fontSize:'30px'}}>Dr. D. Y. Patil Pratishthan's</h3>
        <h3 style={{display:'flex',justifyContent:'center',color:'#227396',fontSize:'30px'}}>Institute for Advanced Computing and Software Development</h3>
        </div>
        <img src={CDACLogo} style={{width:'200px'}} />
        </div><br/><br/><br/>
        </>
    )

}
export default Header;