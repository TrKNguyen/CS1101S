
// Returns 28
function tree_sum(tree)
{
    if (is_null(tree))
    {
        return 0;
    }
    else 
    {
        if (is_number(tree))
        {
            return tree;
        }
        else 
        {
            return tree_sum(head(tree)) + tree_sum(tail(tree));
        }
    }
}
const my_tree = list(1, list(2, list(3, 4), 5), list(6, 7));
tree_sum(my_tree);