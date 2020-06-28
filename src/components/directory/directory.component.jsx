import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';


class Directory extends React.Component{
    constructor(){
        super();

    this.state = {
        sections: [
            {
                title: 'Hats',
                imageUrl: 'https://images.unsplash.com/photo-1565839412225-98641b2d7b5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                id: 1,
                linkUrl: 'shop'
            },
            {
                title: 'Jackets',
                imageUrl: 'https://images.unsplash.com/photo-1576993537667-c6d2386f90a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                id: 2,
                linkUrl: ''
            },
            {
                title: 'sneakers',
                imageUrl: 'https://images.unsplash.com/photo-1549298916-f52d724204b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                id: 3,
                linkUrl: ''
            },
            {
                title: 'Womens',
                imageUrl: 'https://images.unsplash.com/photo-1529903384028-929ae5dccdf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                size: 'large',
                id: 4,
                linkUrl: ''
            },
            {
                title: 'Mens',
                imageUrl: 'https://images.unsplash.com/photo-1528977695568-bd5e5069eb61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                size: 'large',
                id: 5,
                linkUrl: ''
            }

        ]
    }
    }


render(){
    return(
        <div className="directory-menu">
            {
                this.state.sections.map(({ id, ...otherSectionsProps}) => (
                    <MenuItem key={id} {...otherSectionsProps}/>
                ))
            }
        </div>
    );
}
}

export default Directory;