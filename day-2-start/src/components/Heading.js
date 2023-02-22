function Heading({color, fontSize, name, age}) {
  const headingStyle = {
    color: color,
    fontSize: fontSize + "px"
  }
  return (
    <h1 style={headingStyle}> Hello {name} and my age is {age}</h1>
  )
}

export default Heading;
