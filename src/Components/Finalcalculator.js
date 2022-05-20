import React, { useState } from "react";
import Button from "./Button/Button";
import Display from "./Display/Display";
import Keypad from "./Keypad/Keypad";
import "./Finalcalculator.css";

function Finalcalculator( ) {
  const [usersdata, setuserdata] = useState(" ");

  const handleClick=(event)=> {
    const value = event.target.getAttribute("data-value");
    console.log(value);
    switch (value) {
      case "clear":
        setuserdata((" "));
        break;
      case "equal":
        const result = eval(usersdata);
        setuserdata((result));
        break;
      default:
        setuserdata((usersdata+value));
        break;
    }
  }

  return (
    <div className="Calculator">
      <Display usersdata1={usersdata}/>
      <Keypad>
        <Button onClick={handleClick} label="C" value="clear" />
        <Button onClick={handleClick} label="7" value="7" />
        <Button onClick={handleClick} label="4" value="4" />
        <Button onClick={handleClick} label="1" value="1" />
        <Button onClick={handleClick} label="0" value="0" />

        <Button onClick={handleClick} label="/" value="/" />
        <Button onClick={handleClick} label="8" value="8" />
        <Button onClick={handleClick} label="5" value="5" />
        <Button onClick={handleClick} label="2" value="2" />
        <Button onClick={handleClick} label="." value="." />

        <Button onClick={handleClick} label="x" value="*" />
        <Button onClick={handleClick} label="9" value="9" />
        <Button onClick={handleClick} label="6" value="6" />
        <Button onClick={handleClick} label="3" value="3" />
        <Button onClick={handleClick} label="" value="null" />

        <Button onClick={handleClick} label="-" value="-" />
        <Button onClick={handleClick} label="+" size="2" value="+" />
        <Button onClick={handleClick} label="=" size="2" value="equal" />
      </Keypad>
    </div>
  );
}

export default Finalcalculator;