class Api::V1::BabiesController < Api::ApplicationController
    before_action :authenticate_user!

    def index
        baby = Baby.find_by_user_id(current_user)
        if baby
            render(json: baby)
        else
            render(json: {no: "no"})
        end
    end


    def create
        baby = Baby.new params.require(:baby)
        .permit(
          :first_name,
          :last_name,
          :dob
        )
        baby.user = current_user
        if baby.save
            render json: {id: baby.id}
        else
            render(
                json: {errors: baby.errors.messages },
                status: 422 
            )
        end
    end

    def show
        baby = Baby.find params[:id]
            if baby.user === current_user
            render(json: baby)
            
            else 
                render(json: {no: "no"})
            
            end
    end


    def update
        baby = Baby.find params[:id]
        if baby.update(baby_params)
            render json: {id: baby.id}
           
        else
            render(
                json: { errors: baby.errors.messages},
                status: 422
            )
        end

        def destroy
            baby = Baby.find params[:id]
            if baby.destroy
            
                render(
                    json:{status: 200}
                )
            else
                render( json: {status:500})
            end

        end
    end

    private
    def baby_params
        params.require(:baby).permit(:first_name,:last_name,:dob)
      end
end
