const orangeText = ()=> {
  let count=$('.corporation-input').length;
  for (let i=0; i<count; i++) {
        // console.log(i);
    $('.corporation-input:eq('+i+')').focus(function(){
          $('.corporation-form__text:eq('+i+')').addClass('orangeText');
    });
    $('.corporation-input:eq('+i+')').focusout(function(){
          $('.corporation-form__text:eq('+i+')').removeClass('orangeText');
    });       
  }
}
export default orangeText