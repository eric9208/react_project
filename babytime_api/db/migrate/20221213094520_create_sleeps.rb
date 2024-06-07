class CreateSleeps < ActiveRecord::Migration[7.0]
  def change
    create_table :sleeps do |t|
      t.string :title, default: "Sleep"
      t.integer :duration
      t.text :note
      t.references :activity, null: false, foreign_key: true
      t.timestamps
    end
  end
end
