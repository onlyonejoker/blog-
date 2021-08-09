---
home: true
heroText: null
tagline:
# heroImage: /hero.png
# heroImageStyle: {
#   maxWidth: '600px',
#   width: '100%',
#   display: block,
#   margin: '9rem auto 2rem',
#   background: '#fff',
#   borderRadius: '1rem',
# }
bgImageStyle: {height: "100vh"}
---

<script>
  var index = 0;
  var text = [
  "愿中国青年都摆脱冷气",
  "只是向上走",
  "不必听自暴自弃者流的话",
  "能做事的做事",
  "能发声的发声",
  "有一分热，发一分光",
  "就令萤火一般",
  "也可以在黑暗里发一点光",
  "不必等候炬火",
  "-----鲁迅*热风-----",
  ];
  var hero = null
  setTimeout(() => {
     hero = document.querySelector(".hero").children[0];
     hero.className = "heroText";
     hero.innerHTML = text[index];
  },200);

  setInterval(() => {
    console.log(hero);
    if(hero!==null){
      index++
        if(index>=10) index = 0
        hero.innerHTML = text[index];
        
    }
  }, 2000);
</script>

<style>
  .heroText {
    color: #000;
    font-size: 20px;
    font-weight: 700;
    font-family: "宋体";
  }
</style>
