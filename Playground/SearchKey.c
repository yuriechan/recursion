struct node 
{
    int data;
    struct node* left;
    struct node* right;
}



struct node* search(struct node* root, int key)
{
    if (root === NULL || root->key === key)
        return root;
    
    if (root->key < key) 
        return search(root->right, key)
    
    //if (root->key > key) // this conditional is unnecesarry, because fall back cases are only when new key is smaller
        return search(root->left, key)
}