import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa'; 
import { Helmet } from 'react-helmet';

function AddPage() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

 
  useEffect(() => {
    axios.get("http://localhost:3000/services")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const formik = useFormik({
    initialValues: {
      title: '',
      price: '',
      image: '',
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .required('Title is required')
        .max(50, 'Title must be 50 characters or less'),
      price: Yup.number()
        .required('Salary is required')
        .typeError('Salary must be a number'),
      image: Yup.string()
        .required('Image URL is required')
        .url('Invalid URL format'),
    }),
    onSubmit: (values) => {
      axios.post("http://localhost:3000/services", values)
        .then((response) => {
          alert("Product added successfully");
          setProducts([...products, response.data]); 
          navigate("/");  
        })
        .catch((error) => {
          console.error("Error adding product:", error);
        });
    },
  });

  
  const deleteProduct = (_id) => {
    axios.delete(`http://localhost:3000/services/${_id}`)
      .then(() => {
        setProducts(products.filter((product) => product._id !== _id));  
        alert("Product deleted successfully");
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
  };

  return (
    <>
     <Helmet>
            <title>Add Page</title>
      </Helmet>
    
    <div className="form-container">
      <h1>Add Page</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={formik.touched.title && formik.errors.title ? 'input-error' : ''}
          />
          {formik.touched.title && formik.errors.title ? (
            <div className="error-message">{formik.errors.title}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="price">price</label>
          <input
            id="price"
            name="price"
            type="text"
            value={formik.values.price}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={formik.touched.price && formik.errors.price ? 'input-error' : ''}
          />
          {formik.touched.price && formik.errors.price ? (
            <div className="error-message">{formik.errors.price}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="image">Image URL</label>
          <input
            id="image"
            name="image"
            type="text"
            value={formik.values.image}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={formik.touched.image && formik.errors.image ? 'input-error' : ''}
          />
          {formik.touched.image && formik.errors.image ? (
            <div className="error-message">{formik.errors.image}</div>
          ) : null}
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>

      
      <div className="products-table">
        <h2>Your Products</h2>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Salary</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product.title}</td>
                <td>${product.price}</td>
                <td><img src={product.image} alt={product.title} width="100" /></td>
                <td>
                  <button onClick={() => deleteProduct(product._id)} className="delete-button">
                    <FaTrash /> 
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    
    </>
    
  );
}

export default AddPage