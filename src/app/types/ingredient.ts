export class Ingredient{
    public name: String;
    public measuredType: String;
    public quantity: DoubleRange;
    public pricePerUnit: DoubleRange;
   
    constructor(ingredient?: Ingredient | IngredientView | any){
   
      if(ingredient) {
        this.name = ingredient.name;
        this.measuredType = ingredient.measuredType;
        this.quantity = ingredient.quantity;
        this.pricePerUnit = ingredient.pricePerUnit;
      }
    }
   
   }
   
   export class IngredientView extends Ingredient {
    constructor(ingredient?: Ingredient | IngredientView | any) {
      super(ingredient);
    }
   }
   
   