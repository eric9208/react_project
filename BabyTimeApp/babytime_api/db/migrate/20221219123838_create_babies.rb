class CreateBabies < ActiveRecord::Migration[7.0]
  def change
    create_table :babies do |t|
      t.string :first_name
      t.string :last_name
      t.date :dob
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
