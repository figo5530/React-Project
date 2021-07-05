class ShopsController < ApplicationController
    def index
        render json: Shop.all
    end

    def show
        shop = Shop.find_by(id: params[:id])
        render json: shop
    end
end
