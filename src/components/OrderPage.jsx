import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
        
export default function Order() {
   return (
   <div>
        <h1> Teknolojik Yemekler</h1>
        <span>Anasayfa &gt; Sipariş Oluştur</span>
        <main>
          <h2>Position Absolute Acı Pizza</h2>
           <p>89.90 <span>4.9</span></p>
           <p>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.</p>
           <Form>
           <FormGroup>
      <Label  htmlFor="sizeSelect">Select size</Label>
     
        <Input
          type="radio"
          name="small"
          id="small"
          value="small"
          checked={""}
          onChange={""}
        />
        <Label htmlFor="small" >Small</Label>
     
      
        <Input
          type="radio"
          name="medium"
          id="medium"
          value="medium"
          checked={""}
          onChange={""}
        />
        <Label htmlFor="medium" >Medium</Label>


        <Input
          type="radio"
          name="large"
          id="large"
          value="large"
          checked={""}
          onChange={""}
        />
        <Label htmlFor="large">Large</Label>
      
    </FormGroup>

    <FormGroup>
        <Label htmlFor="doughSelect">Select dough</Label>
        <Input type="select" name="dough" id="dough"  value={""} onChange={""}>
          
          <option value="XThinDough">Extra Thin</option>
          <option value="ThinDough">Thin</option>
          <option value="MediumDough">Medium</option>
          <option value="DeepDishDough">Deep Dish</option>
        </Input>
      </FormGroup>

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


      <FormGroup>
        <input type="checkbox" />


      </FormGroup>
    </Form>
        

           
        </main>
      </div>)
}