
function remove_duplicates(ls)
{
    return accumulate((x,ls) => pair(x, filter(t => t !== x, ls)) , null, ls);
}
display(remove_duplicates(list(1, 1, 4, 11, 7, 4, 11, 13, 13)));
remove_duplicates(list(1, 2, 3, 4, 4, 3, 2, 1, 2));

function subsets(ls)
{
    function getmul(xs)
    {
        if (is_null(xs)) 
        {
            return 1;
        }
        else 
        {
            return 2 * getmul(tail(xs));
        }
    }
    function get(xs, num)
    {
        if(is_null(xs))
        {
            return null;
        }
        else 
        {
            if (num % 2 === 1)
            {
                return pair(head(xs), get(tail(xs), (num - 1) / 2));   
            }
            else 
            {
                return get(tail(xs), num / 2);
            }
        }
    }
    const len = getmul(ls);
    function res(num)
    {
        if (num === -1)
        {
            return null;
        }
        else 
        {
            return pair(get(ls, num), res(num - 1)); 
        }
    }
    return res(len - 1);
}
subsets(list(9, 2, 5));

function permutations(ls)
{
    if (length(ls)===1)
    {
        return list(list(head(xs)));
    }
    else 
    {
    
    function add_on(ls, num, val)
    {
        if (num === 0)
        {
            return pair(val ,add_on(ls, num,val));
        }
        else if (is_null(ls))
        {
            return null;
        }
        else 
        {
            return pair(head(ls), add_on(tail(ls), num - 1, val));
        }
    }
    const len = length(ls);
    const listper = permutations(tail(ls));
    function iter(num)
    {
        if (num === len) 
        {
            return {};
        }
        else 
        {
            
        }
    }
}


