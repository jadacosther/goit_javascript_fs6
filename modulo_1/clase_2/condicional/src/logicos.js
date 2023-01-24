let a1 =  true && true;     // t && t devuelve true
let a2 =  true && false;    // t && f devuelve false
let a3 = false && true;     // f && t devuelve false
let a4 = false && (3 == 4); // f && f devuelve false
let a5 = 'Cat' && 'Dog';    // t && t devuelve Dog
let a6 = false && 'Cat';    // f && t devuelve false
let a7 = 'Cat' && false;    // t && f devuelve false

let o1 =  true || true;     // t || t devuelve true
let o2 = false || true;     // f || t devuelve true
let o3 =  true || false;    // t || f devuelve true
let o4 = false || (3 == 4); // f || f devuelve false
let o5 = 'cat' || 'Dog';    // t || t devuelve Cat
let o6 = false || 'Cat';    // f || t devuelve Cat
let o7 = 'Cat' || false;    // t || f devuelve Cat