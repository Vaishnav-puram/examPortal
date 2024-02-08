import { axiosService } from "../../services/Helper";
import { getToken } from "../../services/User_Service";
function Categories(){
    const categories=(e)=>{
        e.preventDefault()
        axiosService.get('category/getCategories',{
            headers: {
                'Authorization': `Bearer ${getToken().token}`,
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
              }
            }).then((res)=>{
                console.log(res.data);
            })
    }
    return(
        <>
            <h3>Categories</h3>
            <button onClick={categories}>Get categories</button>
        </>
    )
}
export default Categories;