import React from 'react'
import styles from "../../../ui/dashboard/products/addProduct/addProduct.module.css"


const Add = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder='title' name="title" id="title"required />
        <select name="cat" id="cat">
          <option value="general">Select Category</option>
          <option value="Birgunj">Birgunj</option>
          <option value="Pokhara">Pokhara</option>
          <option value="Kathmandu">Kathmandu</option>
          <option value="Dhulag">Dhulag</option>
        </select>
        <input type="number" placeholder='price' name="price" id="price"required />
        <input type="number" placeholder='stock' name="stock" id="stock"required />
        <input type='text' placeholder='color' name="color" id="color"required />
        <input type='text' placeholder='size' name="size" id="size"required />
<textarea name="description" id="description" required cols="30" rows="10">Description</textarea>
        <button type="submit">Submit</button>
        
      </form>
    </div>
  )
}

export default Add