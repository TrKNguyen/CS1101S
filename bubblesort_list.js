function bubblesort_list(L) {
// ???
  const n = length(L); 

  for (let i = 0 ; i  < n ; i = i + 1){
      let iter = L;
      for (let j = 0 ; j + 1 < n ; j = j + 1){
          if (head(iter) > head(tail(iter))){
              const temp = head(iter); 
              set_head(iter, head(tail(iter))); 
              set_head(tail(iter), temp);
          }
          iter = tail(iter);
      }
  }
  return L;
}

const LL = list(3, 5, 2, 4, 1);
bubblesort_list(LL);
LL;