// 1. searching key 
// struct node 
// {
//     int data;
//     struct node* left;
//     struct node* right;
// }

// struct node* search(struct node* root, int key)
// {
//     if (root === NULL || root->key === key)
//         return root;
    
//     if (root->key < key) 
//         return search(root->right, key)
    
//     //if (root->key > key) // this conditional is unnecesarry, because fall back cases are only when new key is smaller
//         return search(root->left, key)
// }

// 2. inserting a key
#include <stdio.h>
#include <stdlib.h>

struct node 
{
    int key;
    struct node *left;
    struct node *right;
};

struct node *newNode (int item) 
{
    struct node *temp = (struct node *)malloc(sizeof(struct node));
    temp->key = item;
    temp->left = NULL;
    temp->right = NULL;
    return temp;
}

struct node* insert(struct node* node, int key)
{
    if (node == NULL) return newNode(key);
    if (key < node->key)
        node->left = insert(node->left, key);
    else if (key > node->key)
        node->right = insert(node->right, key);

    return node;
}

void inorder(struct node *root)
{
    if (root != NULL)
    {
        inorder(root->left);
        printf("%d \n", root->key);
        inorder(root->right);
    }
}

int main () {
    struct node *root = NULL;
    root = insert(root, 50);
    insert(root, 30);
    insert(root, 20);
    insert(root, 40);
    insert(root, 70);

    inorder(root);
    return 0;
}
