import IACSDLogo from "../images/IACSD_Logo.png";
import CDACLogo from "../images/cdacActs.png";
function Header() {
    let st = {
        paddingTop: '5px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '90px'
    }
    let titleStyle = {
        textAlign: 'center',
        color: '#227396',
        fontSize: '28px'
    };
    let logoStyle = {
        width: '100px',
        height: 'auto'
    };

    return (
        <div style={{ backgroundColor: 'white' }}>
            <div style={st}>
                <img src={IACSDLogo} style={logoStyle} />
                <div>
                    <h3 style={titleStyle}>Dr. D. Y. Patil Pratishthan's</h3>
                    <h3 style={titleStyle}>Institute for Advanced Computing and Software Development</h3>
                </div>
                <img src={CDACLogo} style={{ width: '200px' ,logoStyle}} />
            </div><br /><br /><br />
        </div>
    )

}
export default Header;