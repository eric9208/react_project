class ActivitySerializer < ActiveModel::Serializer
  attributes :id

  belongs_to :user

  class UserSerializer < ActiveModel::Serializer
    attributes :id, :first_name, :last_name, :email, :full_name
    
  end
  
  has_many :diapers
  class DiaperSerializer < ActiveModel::Serializer
    attributes :id, :created_at, :note
  end

  has_many :formulas
  class FormulaSerializer < ActiveModel::Serializer
    attributes :id, :amount, :created_at, :note
  end

  has_many :sleeps
  class SleepSerializer < ActiveModel::Serializer
    attributes :id, :duration ,:created_at, :note
  end
end
