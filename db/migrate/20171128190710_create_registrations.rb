class CreateRegistrations < ActiveRecord::Migration[5.1]
  def change
    create_table :registrations do |t|
      t.integer :owner_id, null: false
      t.integer :ticket_id, null: false
      t.integer :num_tickets, null: false

      t.timestamps
    end

    add_index :registrations, :owner_id
    add_index :registrations, :ticket_id
  end
end
