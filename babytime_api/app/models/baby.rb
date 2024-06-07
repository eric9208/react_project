class Baby < ApplicationRecord
  belongs_to :user

  validates :first_name, presence: {message: "Must Enter First Name"}
  validates :last_name, presence: {message: "Must Enter Last Name"}
  validates :dob, presence: {message: "Must Enter Birth Date"}
end
