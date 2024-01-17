import common from "../common.module.css";
import style from "./Contents.module.css";
import ingredient from "./images/ingredients.png";
import juicy from "./images/Burger.jpg";
import defaul from "./images/burger2.png";
import { useNavigate } from "react-router-dom";

const Contents = () => {
  const navigate = useNavigate();

  return (
    <div className={common.container}>
      <div className={style.container}>
        <div className={style.imgContainer}>
          <img src={ingredient} className={style.ingredientImg} />
        </div>
        <div className={style.description}>
          <h4>Welcome to Burgers - Customize Your Burger!</h4>
          <p>
            At Burgers, we believe in giving you the power to create the burger
            of your dreams. Our customizable burger page allows you to handpick
            every ingredient that goes into your delicious creation. Here's how
            it works:{" "}
          </p>
          <ul>
            <li>
              <b>Choose Your Base:</b> Start by selecting your preferred burger
              patty whether it's classic beef, juicy chicken, or a savory veggie
              option.
            </li>
            <li>
              <b>Add Toppings:</b> Customize your burger further by adding your
              favorite toppings. From fresh lettuce and ripe tomatoes to crispy
              bacon and gooey cheese, the choice is yours.
            </li>
            <li>
              <b>Sauces and Condiments:</b> Elevate the flavor with our
              selection of mouthwatering sauces and condiments. Whether you
              prefer classic ketchup and mustard or want to spice things up with
              special house-made sauces, we've got you covered.
            </li>
            <li>
              <b>Extras and Premium Add-ons:</b> Want to take your burger to the
              next level? Explore our range of extra toppings and premium
              add-ons. From creamy avocado slices to a perfectly fried egg, the
              possibilities are endless.
            </li>
            <li>
              <b>Choose Your Bun:</b> Complete your burger experience by
              selecting the perfect bun. Whether you're a fan of soft brioche or
              opting for a whole grain option, we have a variety of buns to suit
              your taste.
            </li>
          </ul>
          <p>
            Once you've crafted your masterpiece, our skilled chefs will bring
            it to life. Your custom burger will be made to order, ensuring that
            each bite is a burst of flavor tailored just for you. Get ready to
            indulge in a culinary adventure with Burgers where every burger is
            as unique as the person creating it. Start customizing your burger
            now and treat yourself to a personalized dining experience!
          </p>
        </div>
      </div>
      <div className={style.container}>
        <div className={style.leftSection}>
          <img src={juicy} className={style.sectionImg} />
          <h6 className="mt-3">Are You Hungry?</h6>
          <h6>Here is our Menu for you.</h6>
          <h6>We have prepared various menu for your taste.</h6>
          <h6>Go with the default one then customize as you want</h6>
          <button className="btn btn-danger mt-3">Browse Menu</button>
        </div>
        <div className={style.rightSection}>
          <img src={defaul} className={style.sectionImg} />
          <h6 className="mt-3">
            Well...is this not enough? Are You bored of the regular Burgers?
          </h6>
          <h6> We knew that!! You can be creative.</h6>
          <h6>Browse the Menu and customize your Burgers. </h6>
          <h6> So, Why Delay!! Go and Customize Your own Burgers!!</h6>
          <button
            className="btn btn-danger mt-3"
            onClick={() => navigate("/menu")}
          >
            Create your Own
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contents;
