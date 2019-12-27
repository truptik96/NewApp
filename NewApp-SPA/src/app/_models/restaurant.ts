import { FoodItem } from './FoodItem';

export interface Restaurant {
<<<<<<< HEAD
  [x: string]: any;
=======
  
>>>>>>> d702adf5e127ff358fad8ba2750362ce1377c348
    id: number;
    name: string;
    address: string;
    contact_person: string;
    contact_number: number;
    email: string;
    website: string;
    timings: string;
    timeinterval: string;
    rating: number;
    type: string;
    ismain: boolean;
    url: string;
    fooditem: FoodItem[];

}
