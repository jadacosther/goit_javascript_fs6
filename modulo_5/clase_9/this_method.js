let blog = {
    name: 'Routers',
    address: 'street 34',
    message: function() {
        console.log(`${this.name} blogs on ${this.address}`);
    }
};

blog.message();