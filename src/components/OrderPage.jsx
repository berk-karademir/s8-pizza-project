import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import  '/src/orderPage.css'
import axios from 'axios';
export default function Order({ setOrderStatus }) {
  const initValues = {
    size: "",
    dough: "",
    crust: "",
    toppings: [],
    extraSauces: [],
    orderNotes: "",
    quantity: 1,
    fastDelivery: false,
  }
  const [formData, setFormData] = useState(initValues)

  const sizes = ["Small", "Medium", "Large", "XLarge"];
  const doughOptions = ["Extra Thin", "Thin", "Medium", "Deep Dish"];
  const crustOptions = ["Extra Thin", "Thin", "Medium", "Bold", "Garlic", "Chili Garlic"];
  const toppings = ["Pepperoni", "BBQ Chicken", "Corn", "Garlic", "Pineapple", "Sausage", "Onion", "Fermented Sausage", "Turkish Sausage", "German Wurst", "Charleston", "Zucchini", "Canadian Ham", "Tomato", "Jalapeno"];
  const sauceOptions = ["Ketchup", "Mayonnaise", "Garlic Mayonnaise", "Ranch", "Chili Sauce", "BBQ Sauce", "Buffalo Sauce"];
  
  const changeHandler = (event) => {
    const { name, value, type, checked } = event.target;
    const updatedData = { ...formData };
  
    if (type === "checkbox") {
      if (name === "toppingSelect") {
        if (checked) {
          if (formData.toppings.length < 10) {
            updatedData.toppings = [...formData.toppings, value];
            //console.log("a topping checked >>>", updatedData)
          } else {
            alert("You can select up to 10 toppings only.");
            return;
          }
        } else {
          updatedData.toppings = formData.toppings.filter(item => item !== value);
          //console.log("a topping unchecked >>>", updatedData)
        }
      } else {
        if (name === "extraSauces") {
          if (checked) {
            updatedData.extraSauces = [...formData.extraSauces, value];
            //console.log("a sauce checked >>>", updatedData)
          } else {
            updatedData.extraSauces = formData.extraSauces.filter(item => item !== value);
            //console.log("a sauce unchecked >>>", updatedData)
          }
        } else if (name==="fastDelivery") {
          updatedData.fastDelivery = checked
        }
      }
    } else {
      updatedData[name] = value;
      //console.log("a 'must' field / order note updated ", updatedData)
    }
  
    setFormData(updatedData);
  };

  const updateQuantity = (change) => {
    //Math.max(aralığın en küçük sayısı, en büyük sayısı)
    const newQuantity = Math.max(1, formData.quantity + change);
    setFormData({ ...formData, quantity: newQuantity });
    //console.log("Pizza quantity changed: new quantity is =>", newQuantity)
  };

  const resetHandler = () => {
    setFormData(initValues)
    //console.log("All selections are resetted.", formData)
  }

  const submitHandler = (event) => {
    event.preventDefault();

    axios.put('https://reqres.in/api/pizza', formData)
      .then((response) => {
        console.log('Form submitted successfully:', response);
        setOrderStatus('success');
      })
      .catch((error) => {
        console.warn('There was an error submitting the form:', error);
        setOrderStatus('error'); 
      });
  };

  const toppingsCost = formData.toppings.length * 5 * formData.quantity; 
  const saucesCost = formData.extraSauces.length * 2 * formData.quantity; 
  const fastDeliveryCost = formData.fastDelivery ? 5 : 0;
  const mainCost = 30 * formData.quantity; 
  const totalCost = mainCost + toppingsCost + saucesCost + fastDeliveryCost; 

  const isFormValid = formData.size && formData.dough && formData.crust;

  return (
    <>
    <header>
      <div>
        <h1> Teknolojik Yemekler</h1>
        <span> Anasayfa &gt; <strong> &nbsp; Sipariş Oluştur</strong></span>
      </div>
      </header>
      <main>
        <div className='production-content'>
          <h2>Position Absolute Pizza</h2>
          <p><span>$ 30</span> 4.9 (200)</p>
         
          
          <p>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.</p>
        </div>
        
        <Form onSubmit={submitHandler} className='form-container'>
          <FormGroup>
            <Label className='label-headings'  htmlFor="sizeSelect">Select size*</Label>
            {sizes.map(size => (
              <div key={size}>
                <Input
                  type="radio"
                  name="size"
                  id={size}
                  value={size}
                  checked={formData.size === size}
                  onChange={changeHandler}
                />
                <Label htmlFor={size}>{size}</Label>
              </div>
            ))}
          </FormGroup>

          <FormGroup>
            <Label className='label-headings' htmlFor="doughSelect">Select dough*</Label>
            <Input
              type="select"
              name="dough"
              id="dough"
              value={formData.dough}
              onChange={changeHandler}
            >
              <option value="">Select the dough</option>
              {doughOptions.map(dough => (
                <option key={dough} value={dough}>{dough}</option>
              ))}
            </Input>
          </FormGroup>

          <FormGroup>
            <Label className='label-headings'  htmlFor="crustSelect">Select crust*</Label>
            <Input
              type="select"
              name="crust"
              id="crust"
              value={formData.crust}
              onChange={changeHandler}
            >
              <option value="">Select the crust</option>
              {crustOptions.map(crust => (
                <option key={crust} value={crust}>{crust}</option>
              ))}
            </Input>
          </FormGroup>
              {!isFormValid && <p className='warning-message'>*You must select size, dough and crust!</p>}
        <br />     
          <FormGroup>
            <p className='label-headings'>Extra Toppings
              <span className='italic-span'> (Choose up to 10 - $5 each)</span></p>
            <div className='toppings'>
            {toppings.map(topping => (
              <Label key={topping}
              className='toppings'
              >
                <Input
                  type="checkbox"
                  name="toppingSelect"
                  value={topping}
                  onChange={changeHandler}
                  checked={formData.toppings.includes(topping)}
                />
                {topping}
              </Label>
            ))}
            </div>
          </FormGroup>
          <br />
          <FormGroup>
            <p className='label-headings'>Extra Sauces <span className='italic-span'>($2 each)</span></p>
            <div className='extra-sauces'>
            {sauceOptions.map(sauce => (
              <Label key={sauce}>
                <Input
                  type="checkbox"
                  name="extraSauces"
                  value={sauce}
                  onChange={changeHandler}
                  checked={formData.extraSauces.includes(sauce)}
                />
                {sauce}
              </Label>
            ))}
            </div>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="orderNotes"
            className='label-headings '
            >
              Order Notes
              <Input
                name="orderNotes"
                type="textarea"
                rows="5"
                cols="90"
                placeholder="Would you like to add any notes to your order?"
                value={formData.orderNotes}
                onChange={changeHandler}
              />
            </Label>
          </FormGroup>
          <br />
          <FormGroup>
            <Label htmlFor='fastDelivery' className='label-headings'>
              <Input
                type="checkbox"
                name="fastDelivery"
                checked={formData.fastDelivery}
                onChange={changeHandler}
              />  
              I want fast delivery. <span className='italic-span'> (5$)</span>
            </Label>
          </FormGroup>

        <br />
        <p className='bottom-border-line' ></p>
        <br />

          <div className='costs-container'>
            <p className='label-headings'>Main cost: ${formData.quantity*30}</p>
            <p className='label-headings'>Extra Selections: ${(toppingsCost + saucesCost + fastDeliveryCost)}</p>
            <p className='grand-total'>Grand Total: ${totalCost}</p>
          </div>
          
          <div className='order-btns'>
            <Button className="minus-btn" onClick={() => updateQuantity(-1)}>-</Button>
            <span>{formData.quantity}</span>
            <Button className="plus-btn"  onClick={() => updateQuantity(1)}>+</Button>
            <Button className="place-order-btn"disabled={!isFormValid}>Place Order</Button>
          </div>

          <div>
            <Button className="reset-btn" type='reset' onClick={resetHandler}>Clear all selections</Button>
          </div>
            <br />
          
        </Form>
      </main>
    </>
  );
}
