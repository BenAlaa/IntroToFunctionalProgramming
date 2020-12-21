const Functor = (v) => ({
    value: v,
    map: (f) => Functor(f(v))
});
  
var s =  Functor(2)
    .map(x=>x*x)
    .map(x=>x.toString());

console.log(s.value);