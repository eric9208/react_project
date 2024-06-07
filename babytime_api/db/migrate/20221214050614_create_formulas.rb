class CreateFormulas < ActiveRecord::Migration[7.0]
  def change
    create_table :formulas do |t|
      t.string :title, default: "Formula"
      t.integer :amount
      t.text :note
      t.references :activity, null: false, foreign_key: true

      t.timestamps
    end
  end
end
