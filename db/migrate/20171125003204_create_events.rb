class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.integer :organizer_id, null: false
      t.string :title, null: false
      t.string :description, null: false
      t.string :location, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.datetime :start_datetime, null: false
      t.datetime :end_datetime, null: false
      t.string :img_url, null: false
      t.string :category, null: false
      t.string :event_type
      t.string :privacy, null: false, default: 'public'
      t.string :event_topic

      t.timestamps
    end

    add_index :events, :organizer_id
  end
end
