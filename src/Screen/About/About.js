import Button from "../../components/button/Button";


const AboutScreen = () => {
    const handleViewMore = () => {

    }
  return (
    <div>
      <h1>About Screen</h1>
      <Button 
            title ={"Click Me"}
            bgColor = "red"
            textColor = "white"
            onClick = {handleViewMore} // over write parameter
        />
    </div>
  );
};

export default AboutScreen;
