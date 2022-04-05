import React from 'react';

const Blogs = () => {
    return (
        <div className='text-left mx-36'>
            <div className=''>
            <p>Context api: It's provide a way to pass where we no nedd to pass data through the component tree without having to pass props down manually at every level

                <br /><br />
                it is the alternative to prop drilling or moving  props from grandparent to child to parent, and so on.
            </p>
        </div>
        <div>
            <h2 className='font-bold'>what is Semantic element?</h2>
            semantic element is elements which is clearly describes its meaning to browser and developer both. i mean it describe clearly their meaningin a human and machine-readable way.
            <br />
            example: from tag, table tag,main tag etc,these are clearly defines its content.Its main goal is to make the new multimedia support easy to read for people and easy to understand for computers and devices.
            By creating a standard semantic element, it makes it easier for everyone.

        </div> <br />
        <div>
            <h1 className='font-bold'>difference inline,block,inline-block</h1>
            there is two types of display value: block and inline.
            <h2>block:</h2> its always takes some space(margin ) automatically before and after. after this element , the next element is start with a new line. it takes always full width. 
            example: paragrapg tag, div tag, hr tag main tag etc.
            <br />
            <h2>inline:</h2> it dosent start with new line. it takes as much as necessary. after this element the next element will start next to it without creating a new line.
            (span) tag is an example. button, object etc are inline.
            <h2 >Inline-block:</h2>
            When the properties of a block can be applied by keeping an element inline, then that element is basically called Inline-Block element. In this case we use display: inline-block Css. And I also use the CSS of block elements
        </div>
        </div>
    );
};

export default Blogs;