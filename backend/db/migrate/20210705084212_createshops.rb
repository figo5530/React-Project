class Createshops < ActiveRecord::Migration[6.1]
  def change
    create_table :shops do |t|
      t.string :name
    end
  end
end
