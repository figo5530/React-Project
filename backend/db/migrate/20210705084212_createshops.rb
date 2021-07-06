class Createshops < ActiveRecord::Migration[6.1]
  def change
    create_table :shops do |t|
      t.string :name
      t.string :address
      t.string :city
      t.string :state
      t.string :postal_code
      t.float :stars
      t.integer :review_count
      t.string :categories
    end
  end
end
