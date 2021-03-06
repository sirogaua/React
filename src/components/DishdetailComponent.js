import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";


    function RenderDish({dish}) {
        return (
            <div className='col-12 col-md-5 m-1'>
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
    function RenderComment({comments}) { 
        const all_comments = comments.map((comment) => {
            return (  
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>
                    -- {comment.author}{", "}
                        {new Date(comment.date).toLocaleDateString("en-US", {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        })}
                        </p>
                    </li>
                );
            });
    
            return (
                <div className='col-12 col-md-5 m-1'>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {all_comments}
                    </ul>
                </div>
            )
        }
    
        const DishDetail = (props) => {
            console.log('DishDetail Component render is invoked');
            if (props.dish != null) {
                return (
                    <div className="container">
                    <div className='row'>
                        <RenderDish dish={props.dish} />
                        <RenderComment comments={props.dish.comments} />
                    </div>
                </div>
                          );
                        }
                        else {
                            return (<div></div>);
                        }
                }

export default DishDetail; 