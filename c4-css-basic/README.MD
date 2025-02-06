width and height
color->text & bg color->background ke liye 
units->{
px,em,rem,%,vw,vh

px->use karney se scroller aane lagta hai , so not recommended
    content v hide ho jata hai 
    it depends on screen quality

%->jitna total hai uska hissa, if we inc,dec the size of screen it adjust itself
    70% w->70% of total width of screen
    it takes value from parent element

vw/vh->  it takes value from screen 

em-> depends karta hai us element ke font size par, aur ye agar parent ko dete hai to children par bhi apply hota hai 
means : consider kariye ek element hai jiska pass font size hai to 1em ki
value 16px hogi aur agar font size change kiye to uske responce me "em" ki value bhi badhega 
it is fixed as pixel

rem-> depends on html font size 
} 
max/min-width and max/min-height
font-family-> google fonts{
text-transform:capitalize->every word start with capital
              :uppercase
              :lowecase
              :none
text-decoration:underline ->word ke nichey line
               :none 
               :overline -> text ke uper line
               :line-through-> cut the text
font-weight: 

}
font-size{
font-size->vw->for responsive 
}
line-height -> distance b/w line 
text-align: left /start
          : right /end
          : center
          : justify -> no space is left
padding -> element ko under karney k liye 
        ->30px -> all direction
        ->x,y; ->x->(top,bottom) y->(right,left)
        ->top,right,bottom,left

margin -> b/w 2 element ke bich me space dene 

border -> border: 3px dashed red;, border-radius
display{
block -> jo element block hota hai o allow nahi karta hai ki koi uske bagal me aaye o pura space leta hai 
      ->weidth and height can not be inc/dec
inline-> allow other element to come if space is there 
      ->weidth and height can  be inc/dec
}
position{
absolute->jis element me applay hoga wo uper uth jayega, 
          and that space get empty and bagal wala element unke under aa jayega , 
          utha hua element us layer me kahi v ja sakta hai
          jike v uper aayega wo hide ho jayega 
relative->jis element me applay karega wo element ka position abslute hoga or box ke under he rahega(box ka position relative  hona parega), box ke respact me he chalega 
}
background{
background:url();
background-size:cover->pura div me cover karo image ko (most uses)
               :contain -> pura image aayega 
background-repeat:no-repeat;              
background-position:center;/top/bottom
background:linear-gradient(to right,color1,color2,color3)->change from one color to other color
                          (to right bottom,color1,color2,color3)
background-image:url()
}                   
flex{
when you need element agal bagal then we use it 
it is not used on child, it is used on parent 

y-axis-> cross axis
x-axis-> main axis 
x-axis-> kam karne ke liye justify-content
y-axis-> kam karne ke liye align-items

justify-content: center;
                : space-between;->
                : space-around;
                : space-evenly; -> equal space in b/w element and boundary also
align-items: center;
            : start;   
            : end;
            : stretch;
flex-direction: row;
              : row-reverse;
              : column;
              : column-reverse;
}
pseudo-element{
::before-> har element ke paas 1 possibility hote hai ki wo element chaahe to inactive do after and before naam ki properties ko active kar skta hai 

::first-line
::first-letter
::selection
}
pseudo-classes{
:hover
:active
:focus
:nth-child(n)
}


color Names: red.green
hexadecimal notation:#
rgb functional notation :rgb
rgba functional notation :rgba  a-alpha->transparent a can be 0 to 1

css me har color ki min value 0 hai and maximum 255
 
     r   g  b
     0   0  0 ->black
    255 255 255 -> white
     255 0  0   ->red

.->class
#->id