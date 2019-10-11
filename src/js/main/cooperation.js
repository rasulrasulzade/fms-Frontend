const orangeText = ()=> {
  let count=$('.cooperation-input').length;
  for (let i=0; i<count; i++) {
        // console.log(i);
    $('.cooperation-input:eq('+i+')').focus(function(){
          $('.cooperation-form__text:eq('+i+')').addClass('orangeText');
    });
    $('.cooperation-input:eq('+i+')').focusout(function(){
          $('.cooperation-form__text:eq('+i+')').removeClass('orangeText');
    });       
  }
}
export default orangeText