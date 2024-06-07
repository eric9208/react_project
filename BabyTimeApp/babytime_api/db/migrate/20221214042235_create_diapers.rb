class CreateDiapers < ActiveRecord::Migration[7.0]
  def change
    create_table :diapers do |t|

      t.string :title, default: "Diaper"
      t.text :note
      t.references :activity, null: false, foreign_key: true
      t.timestamps
    end
  end
end
