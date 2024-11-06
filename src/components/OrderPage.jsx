import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

export default function Order() {
  const initValues = {
    size: "",
    dough: "",
    crust: "",
    toppings: [],
    extraSauces: [],
    orderNotes: "",
    quantity: 1,
  }
  const [formData, setFormData] = useState(initValues)

  const sizes = ["Small", "Medium", "Large", "XLarge"];
  const doughOptions = ["Extra Thin", "Thin", "Medium", "Deep Dish"];
  const crustOptions = ["Extra Thin", "Thin", "Medium", "Bold", "Garlic", "Chili Garlic"];
  const toppings = ["Pepperoni", "BBQ Chicken", "Corn", "Garlic", "Pineapple", "Sausage", "Onion", "Fermented Sausage", "Organic Turkish Sausage", "Organic German Wurst", "Charleston", "Zucchini", "Canadian Ham", "Tomato", "Jalapeno"];
  const sauceOptions = ["Ketchup", "Mayonnaise", "Garlic Mayonnaise", "Ranch", "Chili Sauce", "BBQ Sauce", "Buffalo Sauce"];
  
  const changeHandler = (event) => {
    const { name, value, type, checked } = event.target;
    const updatedData = { ...formData };
    
    if (type === "checkbox") {
      if (name === "toppingSelect") {
        updatedData.toppings = checked ? [...formData.toppings, value] : formData.toppings.filter(item => item !== value);
        //console.log("an 'optinal' selected: >>>", updatedData)
      } else if (name === "extraSauces") {
        updatedData.extraSauces = checked ? [...formData.extraSauces, value] : formData.extraSauces.filter(item => item !== value);
        //console.log("an 'optinal' selected: >>>", updatedData)
      }
    } else {
      updatedData[name] = value;
      console.log("a 'must' selection or order notes updated: >>>" ,updatedData)
    }

    setFormData(updatedData);
    
  };

  const updateQuantity = (change) => {
    const newQuantity = Math.max(1, formData.quantity + change);
    setFormData({ ...formData, quantity: newQuantity });
    console.log("Pizza quantity changed: new quantity is =>", newQuantity)
  };

  const resetHandler = () => {
    setFormData(initValues)
    console.log("All selections is resetted.")
  }

  const toppingsCost = formData.toppings.length * 5;
  const saucesCost = formData.extraSauces.length * 2;
  const totalCost = (30 + toppingsCost + saucesCost) * formData.quantity;

  const isFormValid = formData.size && formData.dough && formData.crust;

  return (
    <>
      <div>
        <h1> Teknolojik Yemekler</h1>
        <span>Anasayfa &gt; Sipariş Oluştur</span>
      </div>
      <main>
        <div>
          <h2>Position Absolute Pizza</h2>
          <p> $30 <span>4.9 (200)</span></p>
          <p>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre...</p>
        </div>
        
        <Form>
          <FormGroup>
            <Label htmlFor="sizeSelect">Select size</Label>
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
            <Label htmlFor="doughSelect">Select dough</Label>
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
            <Label htmlFor="crustSelect">Select crust</Label>
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

          <FormGroup>
            <p>Toppings - Choose up to 10 ($5 each)</p>
            {toppings.map(topping => (
              <Label key={topping}>
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
          </FormGroup>

          <FormGroup>
            <p>Extra Sauces ($2 each)</p>
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
          </FormGroup>

          <FormGroup>
            <Label htmlFor="orderNotes">
              Order Notes
              <Input
                name="orderNotes"
                type="textarea"
                placeholder="Would you like to add any notes to your order?"
                value={formData.orderNotes}
                onChange={changeHandler}
              />
            </Label>
          </FormGroup>

          <div>
            <Button onClick={() => updateQuantity(-1)}>-</Button>
            <span>{formData.quantity}</span>
            <Button onClick={() => updateQuantity(1)}>+</Button>
          </div>
            <br />
          <div>
            <Button type='button' onClick={resetHandler}>Clear all selections</Button>
            <p>Main cost: ${formData.quantity*30}</p>
            <p>Extra Selections: ${(toppingsCost + saucesCost) * formData.quantity}</p>
            <p>Grand Total: ${totalCost}</p>
            <Button type="submit" disabled={!isFormValid}>Place Order</Button>
          </div>
        </Form>
      </main>
    </>
  );
}
