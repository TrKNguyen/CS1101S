
function next(val){
    return pair(val, () => next(val * 10 + val % 10));
}
const s1 = next(2); 
const s2 = next(3); 
const s3 = next(4);

function zip_list_of_streams(ls){
    if (is_null(ls)){
        return null;
    }
    function get(xs){
        if (is_null(tail(xs))){
            return pair(head(head(xs)), () => zip_list_of_streams(map(stream_tail, ls)));
        }else{
            return pair(head(head(xs)), () => get(tail(xs)));
        }
    }
    return get(ls);
}
function zip_list_of_streams_new_ver(ls){
    return pair(head(head(ls)), () => zip_list_of_streams_new_ver(append(tail(ls), list(stream_tail(head(ls))))));
}
eval_stream(zip_list_of_streams_new_ver(list(s1, s2, s3)), 20);