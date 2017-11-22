class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :email, null: false
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :profile_img_url
      t.timestamps
    end
    add_index :users, :session_token, unique: true
    add_index :users, :email, unique: true
  end
end
