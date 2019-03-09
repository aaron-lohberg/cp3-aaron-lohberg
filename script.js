let app = new Vue({
  el: '#app',
  data:{
    number1: '',
    number2: '',
    operator: '',
    answer: '',
    badNumber1: '',
    badNumber2: '',
    bOperator: '',
    badAnswer: '',
    url:'',
  },
  methods:{
    solve(){
      switch(this.operator){
          case '+':
            this.answer = parseInt(this.number1) + parseInt(this.number2);
            break;
          case '-':
            this.answer = parseInt(this.number1) - parseInt(this.number2);
            break;
          case '*':
            this.answer = parseInt(this.number1) * parseInt(this.number2);
            break;
          case '/':
            this.answer = parseInt(this.number1) / parseInt(this.number2);
            break;
          case '%':
            this.answer = parseInt(this.number1) % parseInt(this.number2);
            break;
          default:
            this.badAnswer = "dingus.."
            break;
      }
    },
      badSolve(){
        switch(this.bOperator){
            case '+':
              this.badAnswer = this.badNumber1 + this.badNumber2;
              break;
            case '-':
              this.badAnswer = this.badNumber1 ^ this.badNumber2;
              break;
            case '*':
              this.badAnswer = "Math teachers made up multiplication - it's a lie, kiddo.";
              break;
            case '/':
              this.url = "/images/pugMath.jpg";
              break;
            case '%':
              var num = this.badNumber1 % 126;
              if(num < 32){
                num = num + 32;
              }
              this.badAnswer = String.fromCharCode(num);
              break;
            case 'D':
              this.badAnswer = this.badNumber1 + "math-is-stupid" + this.badNumber2;
              break;
            case 'd':
              this.badAnswer = this.badNumber1 + "math-is-stupid" + this.badNumber2;
              break;
            default:
              this.badAnswer = "dingus.."
              break;
        }
      }
    }
});
