import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
//https://reactstrap.github.io/?path=/docs/components-forms--input
export default function Order() {
   return (
    <>
   <div>
    <h1> Teknolojik Yemekler</h1>
    <span>Anasayfa &gt; Sipariş Oluştur</span>
  </div>
        <main>
          <h2>Position Absolute Acı Pizza</h2>
           <p>89.90 <span>4.9</span></p>
           <p>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.</p>
           
           
  <Form>
    <FormGroup>
      {/*------------------   SIZE SELECT       ------------------------*/ }
      <Label  htmlFor="sizeSelect">Select size</Label>
     
        <Input
          type="radio"
          name="sizeSelect"
          id="small"
          value="small"
          checked={""}
          onChange={""}
        />
        <Label htmlFor="small" >Small</Label>
     
      
        <Input
          type="radio"
          name="sizeSelect"
          id="medium"
          value="medium"
          checked={""}
          onChange={""}
        />
        <Label htmlFor="medium" >Medium</Label>


        <Input
          type="radio"
          name="sizeSelect"
          id="large"
          value="large"
          checked={""}
          onChange={""}
        />
        <Label htmlFor="large">Large</Label>


        <Input
          type="radio"
          name="sizeSelect"
          id="small"
          value="small"
          checked={""}
          onChange={""}
        />
        <Label htmlFor="small" >Small</Label>
    </FormGroup>


{/*------------------     DOUGH SELECT       ------------------------*/ }
    <FormGroup>
        <Label htmlFor="doughSelect">Select dough</Label>
        <Input type="select" name="dough" id="dough"  value={""} onChange={""}>
          
          <option value="XThinDough">Extra Thin</option>
          <option value="ThinDough">Thin</option>
          <option value="MediumDough">Medium</option>
          <option value="DeepDishDough">Deep Dish</option>
        </Input>
      </FormGroup>

{/*------------------     CRUST SELECT       ------------------------*/ }
      <FormGroup>
        <Label htmlFor="crustSelect">Select crust</Label>
        <Input type="select" name="crust" id="crust"  value={""} onChange={""}>
          
          <option value="XThinCrust">Extra Thin</option>
          <option value="ThinCrust">Thin</option>
          <option value="MediumCrust">Medium</option>
          <option value="BoldCrust">Bold</option>
          <option value="GarlicCrust">Garlic Crust</option>
          <option value="ChiliGarlicCrust">Chili Garlic Crust</option>
        </Input>
      </FormGroup>


{/*------------------     TOPPINGS SELECT       ------------------------*/ }
      <FormGroup >
      Toppings
      <span>Maximum 10 toppings. 5₺</span>
        <Label htmlFor='toppingSelect'>
        <Input
        type='checkbox'
        name='toppingSelect'
        value={"pepperoni"}
        onChange={""}
        checked={""}
        />
        Pepperoni
        </Label>

        <Label htmlFor='toppingSelect'>
        <Input
        type='checkbox'
        name='toppingSelect'
        value={"BBQChicken"}
        onChange={""}
        checked={""}
        />
        BBQ Chicken
        </Label>

        <Label htmlFor='toppingSelect'>
        <Input
        type='checkbox'
        name='toppingSelect'
        value={"corn"}
        onChange={""}
        checked={""}
        />
        Corn
        </Label>

        <Label htmlFor='toppingSelect'>
        <Input
        type='checkbox'
        name='toppingSelect'
        value={"garlic"}
        onChange={""}
        checked={""}
        />
        Garlic
        </Label>


        <Label htmlFor='toppingSelect'>
        <Input
        type='checkbox'
        name='toppingSelect'
        value={"pineapple"}
        onChange={""}
        checked={""}
        />
        Pineapple
        </Label>
        
        <Label htmlFor='toppingSelect'>
        <Input
        type='checkbox'
        name='toppingSelect'
        value={"sausage"}
        onChange={""}
        checked={""}
        />
        Sausage
        </Label>

        <Label htmlFor='toppingSelect'>
        <Input
        type='checkbox'
        name='toppingSelect'
        value={"onion"}
        onChange={""}
        checked={""}
        />
        Onion
        </Label>

        <Label htmlFor='toppingSelect'>
        <Input
        type='checkbox'
        name='toppingSelect'
        value={"fermentedSausage"}
        onChange={""}
        checked={""}
        />
        Fermented Sausage
        </Label>

        <Label htmlFor='toppingSelect'>
        <Input
        type='checkbox'
        name='toppingSelect'
        value={"sucuk"}
        onChange={""}
        checked={""}
        />
        Organic Turkish Sausage
        </Label>

        <Label htmlFor='toppingSelect'>
        <Input
        type='checkbox'
        name='toppingSelect'
        value={"wurst"}
        onChange={""}
        checked={""}
        />
        Organic German Wurst
        </Label>

        <Label htmlFor='toppingSelect'>
        <Input
        type='checkbox'
        name='toppingSelect'
        value={"charleston"}
        onChange={""}
        checked={""}
        />
        Charleston Pepper
        </Label>

        <Label htmlFor='toppingSelect'>
        <Input
        type='checkbox'
        name='toppingSelect'
        value={"zucchini"}
        onChange={""}
        checked={""}
        />
        Zucchini
        </Label>


        <Label htmlFor='toppingSelect'>
        <Input
        type='checkbox'
        name='toppingSelect'
        value={"ham"}
        onChange={""}
        checked={""}
        />
        Canadian Ham
        </Label>

        <Label htmlFor='toppingSelect'>
        <Input
        type='checkbox'
        name='toppingSelect'
        value={"tomato"}
        onChange={""}
        checked={""}
        />
        Tomato
        </Label>


        <Label htmlFor='toppingSelect'>
        <Input
        type='checkbox'
        name='toppingSelect'
        value={"jalapeno"}
        onChange={""}
        checked={""}
        />
        Jalapeño
        </Label>

      </FormGroup>
{/*------------------    ORDER NOTES      ------------------------*/ }
      <FormGroup>
    <Label htmlFor="orderNotes">
      Order Notes
    <Input
      name="orderNotes"
      type="textarea"
      placeholder='Would you like to add any notes to your order?'
      value=""
      onChange={""}
    />
     </Label>
  </FormGroup>
</Form>
        

           
        </main>
      
      </>
      )
}