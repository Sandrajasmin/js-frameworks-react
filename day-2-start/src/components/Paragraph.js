function Paragraph(props) {
  const paragraphStyle = {
    color: props.color,
    fontSize: props.fontSize
  }
  return (
    <p style={paragraphStyle}>
     I am a {props.text}
    </p>
  )
}

export default Paragraph;
