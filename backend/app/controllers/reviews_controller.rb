class ReviewsController < ApplicationController
    def create
        review = Review.create(review_params)
        render json: review
    end

    def destroy
        review = Review.find_by(id: params[:id])
        review.destroy
        render json: {message: "Success!"}
    end
    
    private
    def review_params
        params.require(:review).permit(:content, :shop_id)
    end
end