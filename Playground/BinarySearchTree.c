//A Simple Binary Tree in C lang 
#include <stdio.h>
#include <stdlib.h>

// declare a node with three fields, its data, and two pointer for its children
struct node
{
    int data;
    struct node *left;
    struct node *right;
};

struct node* newNode (int data) {
    struct node *node = (struct node*)malloc(sizeof(struct node));
    node->data = data;
    node->left = NULL;
    node->right = NULL;
    return node;
}


int main () {
    // create a root node 
    struct node *root = newNode(1);
    root->left = newNode(2);
    root->right = newNode(3);
    root->left->left = newNode(4);
    return 0;
}


