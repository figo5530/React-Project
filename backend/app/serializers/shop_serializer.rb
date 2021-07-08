class ShopSerializer < ActiveModel::Serializer
  attributes :id, :name, :address ,:city, :state, :postal_code, :stars, :review_count, :categories
  has_many :reviews
end
