import "./product.css";
import { Link } from "react-router-dom";
import Chart from "../../chart/Chart";
import { productData } from "../../dummyData";
import { Publish } from "@material-ui/icons";

function Product() {
  return (
    <div className="product">
      <div className="productTitileContainer">
        <h1 className="productTitle">Product </h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src="https://pickr.b-cdn.net/wp-content/uploads/2017/01/apple-airpods-review-2017-14.jpg" alt="" className = "productInfoImage"/>
            <span className="productName">Apple Airpod</span>
          </div>
          <div className="productInfoBottom">
                <div className="productInfoItem">
                    <span className="productInfoKey">id:</span>
                    <span className="productInfoValue">123</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">sales:</span>
                    <span className="productInfoValue">8123</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">active:</span>
                    <span className="productInfoValue">123</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">in stock:</span>
                    <span className="productInfoValue">out</span>
                </div>
          </div>
        </div>
      </div>
      <div className="productBottom">

          <form  className="productForm">
              <div className="productFormLeft">
                  <label >Product Name</label>
                  <input type="text" placeholder="Apple Airpod" />
                  <label >Instock</label>
                  <select name="inStock" id="inStock">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
                  <label >Active</label>
                  <select name="active" id="active">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>

              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src="https://icdn2.digitaltrends.com/image/digitaltrends/apple-airpods-gen-2_8-1500x1000.jpg" alt="" className="productUploadImg"/>
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                 <button className="productButton">Update</button>
              </div>
          </form>
      </div>
    </div>
  );
}

export default Product;
